#include <iostream>
using namespace std;

int main(){
	int i, mul=1, number;
	
	cout << "Enter end number for loop: ";
	cin >> number;
	
	for(i=1; i <= number; i++){
		if (i%2==1) {
			mul = mul * i;
		}
	}
	cout << "Product of Odd values: " << mul << endl;
	
//	for(i=1; i <= categories; i++){
//		for (int j=1; j <= products; j++){
//			if ( i.id == j.cat_id) {
//				cout << "Product name: " << products.name; 
//			}
//		}
//	}
}
