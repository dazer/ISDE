var APP_DATA = {
  "scenes": [
    {
      "id": "0-aula",
      "name": "aula",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1158479824751915,
          "pitch": 0.13170534328877537,
          "rotation": 0,
          "target": "1-pasillo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7534503362969716,
          "pitch": 0.07592098915931444,
          "title": "Acceso directo al horizonte",
          "text": "Realmente es Barcelona.<br>Pero la barandilla está modelada!."
        },
        {
          "yaw": 2.219643397088644,
          "pitch": -0.20032680232399436,
          "title": "Pecera",
          "text": "hay que imagirnarlo más tupido"
        },
        {
          "yaw": -0.879751590922158,
          "pitch": -0.2914781425813189,
          "title": "Arco capialzado",
          "text": "La geometría descriptiva vale para algo"
        }
      ]
    },
    {
      "id": "1-pasillo",
      "name": "pasillo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -3.1257952711761057,
        "pitch": 0.04985692882775261,
        "fov": 1.3223956836693749
      },
      "linkHotspots": [
        {
          "yaw": -0.11816142559521658,
          "pitch": 0.11525410637646161,
          "rotation": 0,
          "target": "0-aula"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.4142531210307983,
          "pitch": 0.21581660009996106,
          "title": "pared vegetal",
          "text": "Es como un cuadro verde"
        },
        {
          "yaw": -2.0138701611997796,
          "pitch": -0.4222513083206607,
          "title": "Ruido de render",
          "text": "Si intento hacer una grieta adrede no me queda tan bien."
        },
        {
          "yaw": -3.0745458429858594,
          "pitch": 0.12108463630045208,
          "title": "Denoiser",
          "text": "El algoritmo de denosing me ha hecho un corte de vainilla y fantasmas varios :O"
        }
      ]
    }
  ],
  "name": "ISDE",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
