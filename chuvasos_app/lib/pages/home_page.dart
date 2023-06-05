import 'package:chuvasos_app/pages/weather_page.dart';
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final List<Widget> screens = [WeatherPage(), Text('Abrigos'), Text('infos')];
  final List<String> titles = ['Clima', 'Abrigos', 'Informações'];
  int _currentPage = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(titles[_currentPage]),
      ),
      body: screens[_currentPage],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentPage,
        items: const [
          BottomNavigationBarItem(
              icon: Icon(
                Icons.home,
              ),
              label: 'Home'),
          BottomNavigationBarItem(
              icon: Icon(
                Icons.map,
              ),
              label: 'Abrigos'),
          BottomNavigationBarItem(
              icon: Icon(
                Icons.info_outline,
              ),
              label: 'Infos')
        ],
        onTap: _onTabTapped,
      ),
    );
  }

  void _onTabTapped(int index) {
    setState(() {
      _currentPage = index;
    });
  }
}
