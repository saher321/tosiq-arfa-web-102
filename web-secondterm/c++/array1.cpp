#include <iostream>

using namespace std;

int main() {
	string arr[5] = {};
	int sum = 0;
	int i;
	
//	cout << "Value: " << arr[2];

	for (i = 0; i < 5; i++ ) {
		cout << "Enter city name: ";
		cin >> arr[i];
	}
	cout << endl << "*** RESULT ***" << endl;
	for (i = 0; i < 5; i++ ) {
		cout << arr[i] << endl;
	}
}
