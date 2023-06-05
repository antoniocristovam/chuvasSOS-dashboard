import 'dart:convert';

import 'package:chuvasos_app/models/rainfall_info.dart';
import 'package:fl_chart/fl_chart.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class WeatherPage extends StatefulWidget {
  const WeatherPage({super.key});

  @override
  State<WeatherPage> createState() => _WeatherPageState();
}

class _WeatherPageState extends State<WeatherPage> {
  List<RainfallInfo> rainfalls = [];

  @override
  Widget build(BuildContext context) {
    _getRainfallInfos();

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const SizedBox(
          height: 24,
        ),
        Padding(
          padding: const EdgeInsets.only(left: 16),
          child: Text(
            'Pluviometria',
            style: TextStyle(
                color: Colors.blueGrey[900],
                fontSize: 24,
                fontWeight: FontWeight.w500),
          ),
        ),
        Container(
          margin: const EdgeInsets.all(12),
          height: MediaQuery.of(context).size.height / 2,
          child: Card(
            color: Colors.blueGrey,
            elevation: 8,
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: SizedBox(
                  width: MediaQuery.of(context).size.width * 2,
                  child: BarChart(BarChartData(
                    maxY: _getMaxValue() + 0.5,
                    barGroups: _chartGroups(),
                    titlesData: _getTitlesData(),
                    alignment: BarChartAlignment.start,
                    backgroundColor: Colors.white,
                    gridData: FlGridData(
                      show: true,
                      drawVerticalLine: false,
                    ),
                    borderData: FlBorderData(show: true),
                    barTouchData: _getBarTouchData(),
                  )),
                ),
              ),
            ),
          ),
        ),
      ],
    );
  }

  double _getMaxValue() {
    double maxValue = 0;
    rainfalls.forEach((element) {
      double valueElement = double.parse(
          element.amount.replaceAll('mm', '').replaceAll(',', '.'));
      if (valueElement > maxValue) maxValue = valueElement;
    });

    return maxValue;
  }

  void _getRainfallInfos() async {
    var response =
        await http.get(Uri.http('192.168.0.110:5000', '/rain/rainfalls'));
    List responseList = jsonDecode(response.body);
    setState(() {
      rainfalls = responseList.map((e) => RainfallInfo.fromJson(e)).toList();
    });
  }

  BarTouchData _getBarTouchData() {
    return BarTouchData(
        enabled: true,
        touchTooltipData: BarTouchTooltipData(
          tooltipBgColor: Colors.blueAccent,
          tooltipPadding: const EdgeInsets.all(10),
          getTooltipItem: (group, groupIndex, rod, rodIndex) => BarTooltipItem(
            '${rainfalls[groupIndex].local}: ${rainfalls[groupIndex].amount}',
            const TextStyle(
              color: Colors.white,
              fontWeight: FontWeight.bold,
            ),
          ),
        ));
  }

  FlTitlesData _getTitlesData() {
    return FlTitlesData(
      show: true,
      bottomTitles: AxisTitles(
          sideTitles: SideTitles(
        showTitles: true,
        getTitlesWidget: (value, meta) => SideTitleWidget(
          axisSide: meta.axisSide,
          child: Text((value.toInt() + 1).toString()),
        ),
      )),
      rightTitles: AxisTitles(
        sideTitles: SideTitles(showTitles: false),
      ),
      topTitles: AxisTitles(
        sideTitles: SideTitles(showTitles: false),
      ),
    );
  }

  List<BarChartGroupData> _chartGroups() {
    return rainfalls
        .asMap()
        .map((index, element) => MapEntry(
              index,
              BarChartGroupData(
                x: index,
                barRods: [
                  BarChartRodData(
                      borderRadius: BorderRadius.zero,
                      width: 30,
                      toY: double.parse(element.amount
                          .replaceAll('mm', '')
                          .replaceAll(',', '.'))),
                ],
              ),
            ))
        .values
        .toList();
  }
}
