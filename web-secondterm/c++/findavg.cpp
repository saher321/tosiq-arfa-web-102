#include <iostream>

using namespace std;

int main(){
	int total = 500, sum = 0, english, urdu, math, sst, chemistry;
	float avg;
	int prcnt;
	
	english 	= 78;
	urdu 		= 66;
	math 		= 89;
	sst 		= 90;
	chemistry 	= 95;	
	
	sum 	= english + urdu + math + sst + chemistry;
	prcnt 	= 418/500;
	avg 	= sum / 5;
	
	cout << "Percentage of: " << prcnt << endl;
	cout << "Average of 5 subjects is: " << avg << endl;
	
}
