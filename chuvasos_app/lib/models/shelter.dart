class Shelter {
  final int id;
  final String name;
  final String address;
  final String district;
  final double lat;
  final double long;

  Shelter(this.id, this.name, this.address, this.district, this.lat, this.long);

  factory Shelter.fromJson(Map<String, dynamic> parsedJson) {
    return Shelter(parsedJson['id'], parsedJson['name'], parsedJson['address'],
        parsedJson['district'], parsedJson['lat'], parsedJson['long']);
  }
}
