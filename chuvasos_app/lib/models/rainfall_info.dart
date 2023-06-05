class RainfallInfo {

  final String local;
  final String dateTime;
  final String amount;

  RainfallInfo({required this.local,required this.dateTime,required this.amount});

  factory RainfallInfo.fromJson(Map<String, dynamic> parsedJson){
    return RainfallInfo(local: parsedJson['local'].toString()
    , dateTime: parsedJson['date_time'].toString(), amount: parsedJson['last_24hours'].toString());
  }

}