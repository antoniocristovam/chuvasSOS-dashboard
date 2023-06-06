import 'dart:convert';

import 'package:chuvasos_app/components/shelter_card.dart';
import 'package:chuvasos_app/models/shelter.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class ShelterPage extends StatefulWidget {
  const ShelterPage({super.key});

  @override
  State<ShelterPage> createState() => _ShelterPageState();
}

class _ShelterPageState extends State<ShelterPage> {
  List<Shelter> shelters = [];

  void _getShelterInfos() async {
    var response = await http.get(Uri.http('172.16.2.184:5000', '/shelter'));
    print(response.body);
    Map<String, dynamic> responseList = jsonDecode(response.body);
    setState(() {
      shelters = responseList['shelters']
          .map<Shelter>((e) => Shelter.fromJson(e))
          .toList();
    });
  }

  @override
  void initState() {
    _getShelterInfos();

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: shelters
          .map((e) => ShelterCard(
                id: e.id,
                name: e.name,
                address: e.address,
                district: e.district,
                lat: e.lat,
                long: e.long,
              ))
          .toList(),
    );
  }
}
