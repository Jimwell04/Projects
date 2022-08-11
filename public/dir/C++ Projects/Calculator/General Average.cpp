#include <iostream>

using namespace std;

int main(){
    
    cout << "General Average" << endl << endl ;
    
    float GeneralAverage ;
    
    cout << "Enter your general average" << endl;
    cin >> GeneralAverage ;
    
    if ( GeneralAverage >= 98 ){
        cout << GeneralAverage << ": Is With Highest Honors" << endl << endl;
    }
    else if ( GeneralAverage >= 95 && GeneralAverage < 98 ){
        cout << GeneralAverage << ": Is With High Honors " << endl << endl ;
    }
    else if ( GeneralAverage >= 90 && GeneralAverage < 95){
        cout << GeneralAverage << ": Is With Honors" << endl << endl ;
    }
    else if ( GeneralAverage < 90 && GeneralAverage >=75 ) {
            cout << GeneralAverage << ": Is a Passing Mark" << endl << endl;
        }
     else {
      cout << GeneralAverage << ": Is a Falling Mark" << endl << endl ;
      } 
      
         cout << "By: Jimwell B. Ibay" ;
    return 0 ;
}