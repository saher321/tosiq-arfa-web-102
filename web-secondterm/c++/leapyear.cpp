#include <iostream>
using namespace std;

int main (){
	int year, number;
	
	cout << "Enter number to find its leap year: ";
	cin >> year;
	
	if (year % 4 == 0) {
		cout << year << " is leap year";
	} else {
		cout << year << " isn't leap year";
	}
	
	cout << endl << "*********** Find Positive/Negative number ***********" << endl;
	
	cout << "Enter any number: ";
	cin >> number;
	
	if (number > 0) {
		cout << number << " is positive number";
	} else {
		cout << number << " is negative number";
	}
}
