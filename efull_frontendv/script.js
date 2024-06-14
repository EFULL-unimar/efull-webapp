var map = tt.map({
    key: 'rMMF1AG3qsB7UVgK5vMNbnJIT9pKTjoP',
    container: 'map',
    dragPan: !window.isMobileOrTablet()
});
map.addControl(new tt.FullscreenControl());
map.addControl(new tt.NavigationControl());
new Foldable('#foldable', 'top-right');
var bounds = new tt.LngLatBounds();

var startCoordinates;
var finishCoordinates;
var startAddress;
var finishAddress;

function RoutingAB() {
    this.state = {
        start: undefined,
        finish: undefined,
        marker: {
            start: undefined,
            finish: undefined
        }
    };
    this.startSearchbox = this.createSearchBox('start');
    this.createSearchBox('finish');
    this.closeButton = document.querySelector('.tt-search-box-close-icon');
    this.startSearchboxInput = this.startSearchbox.getSearchBoxHTML().querySelector('.tt-search-box-input');
    this.startSearchboxInput.addEventListener('input', this.handleSearchboxInputChange.bind(this));
    this.createMyLocationButton();
    this.switchToMyLocationButton();
    this.errorHint = new InfoHint('error', 'bottom-center', 5000)
        .addTo(document.getElementById('map'));

    // Preencher os inputs com os valores dos parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search);
    const destinatario = urlParams.get('destinatario');
    const remetente = urlParams.get('remetente');

    if (destinatario) {
        this.startSearchbox.setValue(destinatario);
        this.onResultSelected({ address: { freeformAddress: destinatario }, position: startCoordinates }, 'start');
    }

    if (remetente) {
        this.startSearchbox.setValue(remetente);
        this.onResultSelected({ address: { freeformAddress: remetente }, position: finishCoordinates }, 'finish');
    }
}
RoutingAB.prototype.createMyLocationButton = function() {
    this.upperSearchboxIcon = document.createElement('div');
    this.upperSearchboxIcon.setAttribute('class', 'my-location-button');
    this.upperSearchboxIcon.addEventListener('click', function() {
        navigator.geolocation.getCurrentPosition(
            this.reverseGeocodeCurrentPosition.bind(this),
            this.handleError.bind(this)
        );
    }.bind(this));
};
RoutingAB.prototype.handleSearchboxInputChange = function(event) {
    var inputContent = event.target.value;
    if (inputContent.length > 0) {
        this.setCloseButton();
    } else {
        var resultList = this.startSearchbox.getSearchBoxHTML().querySelector('.tt-search-box-result-list');
        if (resultList || inputContent.length === 0) {
            return;
        }
        this.onResultCleared('start');
    }
};
RoutingAB.prototype.reverseGeocodeCurrentPosition = function(position) {
    this.state.start = [position.coords.longitude, position.coords.latitude];
    tt.services.reverseGeocode({
        key: 'rMMF1AG3qsB7UVgK5vMNbnJIT9pKTjoP',
        position: this.state.start
    })
        .then(this.handleRevGeoResponse.bind(this))
        .catch(this.handleError.bind(this));
};
RoutingAB.prototype.handleRevGeoResponse = function(response) {
    var place = response.addresses[0];
    this.state.start = [place.position.lng, place.position.lat];
    this.startSearchbox.setValue(place.address.freeformAddress);
    this.onResultSelected(place, 'start');
};
RoutingAB.prototype.calculateRoute = function() {
    if (map.getLayer('route')) {
        map.removeLayer('route');
        map.removeSource('route');
    }
    if (!this.state.start || !this.state.finish) {
        return;
    }
    this.errorHint.hide();
    var startPos = this.state.start.join(',');
    var finalPos = this.state.finish.join(',');
    tt.services.calculateRoute({
        key: 'rMMF1AG3qsB7UVgK5vMNbnJIT9pKTjoP',
        traffic: false,
        locations: startPos + ':' + finalPos
    })
        .then(function(response) {
            var geojson = response.toGeoJson();
            map.addLayer({
                'id': 'route',
                'type': 'line',
                'source': {
                    'type': 'geojson',
                    'data': geojson
                },
                'paint': {
                    'line-color': '#2faaff',
                    'line-width': 8
                }
            }, this.findFirstBuildingLayerId());
            var coordinates = geojson.features[0].geometry.coordinates;
            this.updateRoutesBounds(coordinates);
        }.bind(this))
        .catch(this.handleError.bind(this));
};
RoutingAB.prototype.handleError = function(error) {
    this.errorHint.setErrorMessage(error);
};
RoutingAB.prototype.drawMarker = function(type, viewport) {
    if (this.state.marker[type]) {
        this.state.marker[type].remove();
    }
    var marker = document.createElement('div');
    var innerElement = document.createElement('div');
    marker.className = 'route-marker';
    innerElement.className = 'icon tt-icon -white -' + type;
    marker.appendChild(innerElement);
    this.state.marker[type] = new tt.Marker({ element: marker })
        .setLngLat(this.state[type])
        .addTo(map);
    this.updateBounds(viewport);
};
RoutingAB.prototype.updateBounds = function(viewport) {
    bounds = new tt.LngLatBounds();
    if (this.state.start) {
        bounds.extend(tt.LngLat.convert(this.state.start));
    }
    if (this.state.finish) {
        bounds.extend(tt.LngLat.convert(this.state.finish));
    }
    if (viewport) {
        bounds.extend(tt.LngLat.convert(viewport.topLeftPoint));
        bounds.extend(tt.LngLat.convert(viewport.btmRightPoint));
    }
    if (!bounds.isEmpty()) {
        map.fitBounds(bounds, { duration: 0, padding: 50 });
    }
};
RoutingAB.prototype.updateRoutesBounds = function(coordinates) {
    bounds = new tt.LngLatBounds();
    coordinates.forEach(function(point) {
        bounds.extend(tt.LngLat.convert(point));
    });
    if (!bounds.isEmpty()) {
        map.fitBounds(bounds, { duration: 0, padding: 50 });
    }
};
RoutingAB.prototype.createSearchBox = function(type) {
    var searchBox = new tt.plugins.SearchBox(tt.services, {
        showSearchButton: false,
        searchOptions: {
            key: 'rMMF1AG3qsB7UVgK5vMNbnJIT9pKTjoP'
        },
        labels: {
            placeholder: 'Inserir endereço'
        }
    });
    document.getElementById(type + 'SearchBox').appendChild(searchBox.getSearchBoxHTML());
    searchBox.on('tomtom.searchbox.resultsfound', function(event) {
        handleEnterSubmit(event, this.onResultSelected.bind(this), this.errorHint, type);
    }.bind(this));
    searchBox.on('tomtom.searchbox.resultselected', function(event) {
        if (event.data && event.data.result) {
            this.onResultSelected(event.data.result, type);
        }
    }.bind(this));
    searchBox.on('tomtom.searchbox.resultscleared', this.onResultCleared.bind(this, type));
    return searchBox;
};
RoutingAB.prototype.onResultSelected = function(result, type) {
    var pos = result.position;
    this.state[type] = [pos.lng, pos.lat];

    if (type === 'start') {
        startCoordinates = this.state[type];
        startAddress = result.address.freeformAddress;
        console.log('Start Address:', startAddress);
        console.log('Start Coordinates:', startCoordinates);
        this.setCloseButton();
    } else if (type === 'finish') {
        finishCoordinates = this.state[type];
        finishAddress = result.address.freeformAddress;
        console.log('Finish Address:', finishAddress);
        console.log('Finish Coordinates:', finishCoordinates);
    }


    this.calculateDistance = function (lat1, lon1, lat2, lon2, unit) {
        const radlat1 = Math.PI * lat1 / 180;
        const radlat2 = Math.PI * lat2 / 180;
        const radlon1 = Math.PI * lon1 / 180;
        const radlon2 = Math.PI * lon2 / 180;
        const theta = lon1 - lon2;
        const radtheta = Math.PI * theta / 180;
        let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit === "K") { dist = dist * 1.609344 }
        if (unit === "N") { dist = dist * 0.8684 }
        return dist;
    };

    
    // Enviar os dados para a API após selecionar o endereço final
    if (startAddress && finishAddress) {
        // Calcula a distância entre os pontos
        var distanceKm = this.calculateDistance(startCoordinates[1], startCoordinates[0], finishCoordinates[1], finishCoordinates[0], 'K');

        axios.post('https://localhost:7044/api/Entregas', {
            enderecoDestinatario: finishAddress, // Endereço do destinatário
            enderecoRemetente: startAddress,     // Endereço do remetente
            distancia: distanceKm.toFixed(2),     // Distância entre os pontos (arredondada para 2 casas decimais)
            status: "Pendente",                  // Definindo um status padrão
            dataEntrega: new Date().toISOString() // Obtendo a data atual no formato ISO8601
        })
        .then(function (response) {
            console.log('Dados enviados com sucesso:', response.data);
        })
        .catch(function (error) {
            if (error.response) {
                // O servidor retornou uma resposta, mas com um status de erro
                console.error('Erro de resposta do servidor:', error.response.data);
            } else if (error.request) {
                // A requisição foi feita, mas não recebeu resposta
                console.error('Erro de requisição:', error.request);
            } else {
                // Um erro ocorreu ao configurar a requisição
                console.error('Erro ao configurar requisição:', error.message);
            }
            console.error('Erro ao enviar os dados:', error.config);
        });
    }

    this.drawMarker(type, result.viewport);
    this.calculateRoute();
};
RoutingAB.prototype.onResultCleared = function(type) {
    this.state[type] = undefined;
    if (this.state.marker[type]) {
        this.state.marker[type].remove();
        this.updateBounds();
    }
    if (type === 'start') {
        this.switchToMyLocationButton();
    }
    this.calculateRoute();
};
RoutingAB.prototype.setCloseButton = function() {
    var inputContainer = document.querySelector('.tt-search-box-input-container');
    this.closeButton.classList.remove('-hidden');
    if (document.querySelector('.my-location-button')) {
        inputContainer.replaceChild(this.closeButton, this.upperSearchboxIcon);
    }
};
RoutingAB.prototype.switchToMyLocationButton = function() {
    var inputContainer = document.querySelector('.tt-search-box-input-container');
    inputContainer.replaceChild(this.upperSearchboxIcon, this.closeButton);
};
RoutingAB.prototype.findFirstBuildingLayerId = function() {
    var layers = map.getStyle().layers;
    for (var index in layers) {
        if (layers[index].type === 'fill-extrusion') {
            return layers[index].id;
        }
    }
    throw new Error('Map style does not contain any layer with fill-extrusion type.');
};
new RoutingAB();

