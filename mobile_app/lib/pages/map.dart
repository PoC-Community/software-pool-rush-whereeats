// ignore_for_file: import_of_legacy_library_into_null_safe, camel_case_types, avoid_unnecessary_containers, depend_on_referenced_packages

import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:latlong2/latlong.dart';

class mapPage extends StatefulWidget {
  const mapPage({super.key});

  @override
  State<mapPage> createState() => _mapPageState();
}

class _mapPageState extends State<mapPage> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Expanded(
          child: FlutterMap(
            options: MapOptions(
              center: LatLng(45.709364, 4.828928),
              zoom: 13,
            ),
            children: [
              TileLayer(
                urlTemplate:
                    'https://api.mapbox.com/styles/v1/thomashls/cle057mnn000k01rmcs8k18jt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGhvbWFzaGxzIiwiYSI6ImNsZHp5b200czA2OGYzbnFqbWtldW95cHMifQ.j7r_bGPgrytrycM16td-1w',
                additionalOptions: const {
                  'accessToken':
                      'pk.eyJ1IjoidGhvbWFzaGxzIiwiYSI6ImNsZHp5b200czA2OGYzbnFqbWtldW95cHMifQ.j7r_bGPgrytrycM16td-1w',
                  'id': 'mapbox.mapbox-streets-v8',
                },
              ),
            ],
          ),
        ),
        Container(
          height: 50,
          color: Colors.grey[200],
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: const [
              Icon(Icons.home),
              Icon(Icons.location_on),
              Icon(Icons.person),
            ],
          ),
        ),
      ],
    );
  }
}
