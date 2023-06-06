import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher_string.dart';

class ShelterCard extends StatelessWidget {
  final int id;
  final String name;
  final String address;
  final String district;
  final double lat;
  final double long;

  const ShelterCard(
      {Key? key,
      required this.id,
      required this.name,
      required this.address,
      required this.district,
      required this.lat,
      required this.long})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      color: Color.fromARGB(255, 111, 155, 192),
      elevation: 4, // Elevação do card
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(10),
      ),
      child: ListTile(
        contentPadding:
            const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
        title: Text(
          name,
          style: const TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 22,
          ),
        ),
        subtitle: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const SizedBox(height: 8),
            Text(
              'Endereço: $address',
              style: const TextStyle(
                fontSize: 16,
              ),
            ),
            const SizedBox(height: 4),
            Text(
              'Bairro: $district',
              style: const TextStyle(
                fontSize: 16,
              ),
            ),
          ],
        ),
        trailing: IconButton(
          icon: const Icon(Icons.map),
          onPressed: () {
            String url =
                'https://www.google.com/maps/search/?api=1&query=$lat,$long';

            launchUrlString(url);
          },
        ),
      ),
    );
  }
}
