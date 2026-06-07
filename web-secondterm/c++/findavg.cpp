#include <iostream>

using namespace std;

int main(){
	int total = 500, sum = 0, english, urdu, math, sst, chemistry;
	float avg, prcnt;
	
	english 	= 48;
	urdu 		= 66;
	math 		= 69;
	sst 		= 94;
	chemistry 	= 95;	
	
	sum 	= english + urdu + math + sst + chemistry;
	prcnt 	= (sum * 100 ) / total;
	avg 	= sum / 5;
	
	cout << "Sum of all subjects: " << sum << endl;
	cout << "Percentage of: " << prcnt << "%" << endl;
	cout << "Average of 5 subjects is: " << avg << endl;
	
}
