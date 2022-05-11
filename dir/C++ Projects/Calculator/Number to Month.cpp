#include <iostream>

using namespace std;

int main()
{
    cout << "Number To Month" << endl << endl ;
    
    //Number to Month
    int num ;
    
    cout << "Enter a Number: " ;
    cin >> num ;
    
    switch (num) {
           case 1 :
        cout << "It's January \n \n" ;
        break ;
           case 2 :
        cout << "It's February \n \n" ;
        break ;
           case 3 :
        cout << "It's March \n \n" ;
        break ;
          case 4 :
        cout << "It's April \n \n" ;
        break ;
          case 5 :
        cout << "It's May \n \n" ;
        break ;
          case 6 :
        cout << "It's Jun \n \n" ;
        break ;
          case 7 :
        cout << "It's July \n \n" ;
        break ;
          case 8 :
        cout << "It's August \n \n" ;
        break ;
          case 9 :
        cout << "It's September \n \n" ;
        break ;
          case 10 :
        cout << "It's October \n \n" ;
        break ;
          case 11 :
        cout << "It's November \n \n" ;
        break ;
          case 12 :
        cout << "It's December \n \n" ;
        break ;
         
         default :
        cout << "Invalid Input" ;
               
    }
    
    cout << "BY: Jimwe B. Ibay" ;
    
    
    return 0;
}
