#include <iostream>

using namespace std ;

int main ()
{
    //Selection
    int select ;
    
    cout << "//Select A Number In The Choices Below// \n" ;
    cout << "\n 1. What's New \n 2. Bug Fixed \n 3. Next \n" ;
    cout << "Input: " ;
    cin >> select ;
    
  cout << "\n \n" ;
  
   
    if ( select == 1 || select == 2 || select == 3 ) {
        
        //New
        if ( select == 1 ) {
        cout << "//New// \n \n" ;
        cout << "New Selection \n" ;
        cout << "New Version \n" ;
        cout << "Add A Version In The Title \n \n" ;
        }
 
         //Bug Fixed
        if ( select == 2 ){
            cout << "//Bug Fixed// \n" ;
            cout << "Computer Programing Quiz 1.2 \n \n" ;
            cout << "Fix bug in put a space from input a name in Computer Programing Quiz 1.0 \n \n" ;
        }
       
         //Select Version
        if ( select == 3 ){
            int selectVersion ;
            cout << "//Select A Version I Recomment Version 1.2// \n \n" ;
            cout << "1. Computer Programing Quiz 1.0 \n" ;
            cout << "2. Computer Programing Quiz 1.2 \n" ;
            cout << "Select A Version: " ;
            cin >> selectVersion ;
            
       cout << "\n \n" ;
       
       // Computer Programming Quiz 1.0
       if ( selectVersion == 1 ){
       
    cout << "//Computer Programming Quiz 1.0// \n \n" ;

    // Input name    
    string name ;
    cout << "What is your first name? \n" ;
    cout << "My name is: " ;
    cin >> name ;
    
    cout << " \n \n " ;
           
    // Questions & Score
    int sc = 0 ;
    
    cout << "Ok " << name << " this is my question \n \n \n " ;
    
    cout << "//The awnser is letter only// \n \n \n" ;
    
    // Q1
    char aw1 ;
    cout << "1. " << name << " What is most basic building block of the Web. \n" ;
    cout << "\n A. HTML \n B. XML \n C. CSS \n D. JavaScript \n \n " ;
    cout << "Awnser: " ;
    cin >> aw1 ;
    
    cout <<"\n \n" ;
    
    // Q1 if else statement
    if ( aw1 == 'A' || aw1 == 'a' ){
        cout << "The awnser is: A \n" ;
        cout << "Your awnser is: " << aw1 << endl ;
        sc++ ;
        cout << "Your correct :) \n \n" ;
    }else {
        cout << "The awnser is: A \n" ;
        cout << "Your awnser is: " << aw1 << endl ;
        cout << "Your wrong :( \n \n" ;
    }
    
      // Q2
    char aw2 ;
    cout << "2. " << name << " What is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. \n" ;
    cout << "\n A. CXX \n B. SSS \n C. CSS \n D. C++ \n \n" ;
    cout << "Awnser: " ;
    cin >> aw2 ;
    
    cout <<"\n \n" ;
    
    // Q2 if else statement
    if ( aw2 == 'C' || aw2 == 'c' ){
        cout << "The awnser is: C \n" ;
        cout << "Your awnser is: " << aw2 << endl ;
        sc++ ;
        cout << "Your correct :) \n \n" ;
    }else {
        cout << "The awnser is: C \n" ;
        cout << "Your awnser is: " << aw2 << endl ;
        cout << "Your wrong :( \n \n" ;
    }
    
       // Q3
    char aw3 ;
    cout << "3. " << name << " Is a programming language that conforms to the ECMAScript specification. \n" ;
    cout << "\n A. Java \n B. C# \n C. JavaScript \n D. Json \n \n" ;
    cout << "Awnser: " ;
    cin >> aw3 ;
    
    cout <<"\n \n" ;
    
    // Q3 if else statement
    if ( aw3 == 'C' || aw3 == 'c' ){
        cout << "The awnser is: C \n" ;
        cout << "Your awnser is: " << aw3 << endl ;
        sc++ ;
        cout << "Your correct :) \n \n" ;
    }else {
        cout << "The awnser is: C \n" ;
        cout << "Your awnser is: " << aw3 << endl ;
        cout << "Your wrong :( \n \n" ;
    }
    
      // Q4
    char aw4 ;
    cout << "4. " << name << " Is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. \n" ;
    cout << "\n A. C \n B. C# \n C. C++ \n D. C-- \n \n" ;
    cout << "Awnser: " ;
    cin >> aw4 ;
    
    cout <<"\n \n" ;
    
    // Q4 if else statement
    if ( aw4 == 'A' || aw4 == 'a' ){
        cout << "The awnser is: A \n" ;
        cout << "Your awnser is: " << aw4 << endl ;
        sc++ ;
        cout << "Your correct :) \n \n" ;
    }else {
        cout << "The awnser is: A \n" ;
        cout << "Your awnser is: " << aw4 << endl ;
        cout << "Your wrong :( \n \n" ;
    }
    
    // Q5
    char aw5 ;
    cout << "5. " << name << " Is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines. \n" ;
    cout << "\n A. Am \n B. C# \n C. Cm \n D. F# \n \n" ;
    cout << "Awnser: " ;
    cin >> aw5 ;
    
    cout <<"\n \n" ;
    
    // Q5 if else statement
    if ( aw5 == 'B' || aw5 == 'b' ){
        cout << "The awnser is: B \n" ;
        cout << "Your awnser is: " << aw5 << endl ;
        sc++ ;
        cout << "Your correct :) \n \n" ;
    }else {
        cout << "The awnser is: B \n" ;
        cout << "Your awnser is: " << aw5 << endl ;
        cout << "Your wrong :( \n \n" ;
    }
    
    // Q6
    char aw6 ;
    cout << "6. " << name << " Is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or C with Classes. \n" ;
    cout << "\n A. C-- \n B. C** \n C. C++ \n D. C \n \n" ;
    cout << "Awnser: " ;
    cin >> aw6 ;
    
    cout <<"\n \n" ;
    
    // Q6 if else statement
    if ( aw6 == 'C' || aw6 == 'c' ){
        cout << "The awnser is: C \n" ;
        cout << "Your awnser is: " << aw6 << endl ;
        sc++ ;
        cout << "Your correct :) \n \n" ;
    }else {
        cout << "The awnser is: C \n" ;
        cout << "Your awnser is: " << aw6 << endl ;
        cout << "Your wrong :( \n \n" ;
    }
    
      // Q7
    char aw7 ;
    cout << "7. " << name << " Is an interpreted, high-level and general-purpose programming language. \n" ;
    cout << "\n A. Atom \n B. Ruby \n C. Phyton \n D. PHP \n\n" ;
    cout << "Awnser: " ;
    cin >> aw7 ;
    
    cout <<"\n \n" ;
    
    // Q7 if else statement
    if ( aw7 == 'C' || aw7 == 'c' ){
        cout << "The awnser is: C \n" ;
        cout << "Your awnser is: " << aw7 << endl ;
        sc++ ;
        cout << "Your correct :) \n \n" ;
    }else {
        cout << "The awnser is: C \n" ;
        cout << "Your awnser is: " << aw7 << endl ;
        cout << "Your wrong :( \n \n" ;
    }
    
     // Q8
    char aw8 ;
    cout << "8. " << name << " Is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. \n" ;
    cout << "\n A. Java \n B. PHP \n C. JavaScript \n D. Phyton \n \n" ;
    cout << "Awnser: " ;
    cin >> aw8 ;
    
    cout <<"\n \n" ;
    
    // Q8 if else statement
    if ( aw8 == 'A' || aw8 == 'a' ){
        cout << "The awnser is: A \n" ;
        cout << "Your awnser is: " << aw8 << endl ;
        sc++ ;
        cout << "Your correct :) \n \n" ;
    }else {
        cout << "The awnser is: A \n" ;
        cout << "Your awnser is: " << aw8 << endl ;
        cout << "Your wrong :( \n \n" ;
    }
    
     // Q9
    char aw9 ;
    cout << "9. " << name << " Is a general-purpose scripting language especially suited to web development. \n" ;
    cout << "\n A. PHP \n B. Ruby \n C. Java \n D. Phyton \n \n" ;
    cout << "Awnser: " ;
    cin >> aw9 ;
    
    cout <<"\n \n" ;
    
    // Q9 if else statement
    if ( aw9 == 'A' || aw9 == 'a' ){
        cout << "The awnser is: A \n" ;
        cout << "Your awnser is: " << aw9 << endl ;
        sc++ ;
        cout << "Your correct :) \n \n" ;
    }else {
        cout << "The awnser is: A \n" ;
        cout << "Your awnser is: " << aw9 << endl ;
        cout << "Your wrong :( \n \n" ;
    }
    
       // Q10
    char aw10 ;
    cout << "10. " << name << " Is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. and the open-source community, first released in 2014. \n" ;
    cout << "\n A. Kotlin \n B. Swift \n C. C# \n D. C++ \n \n" ;
    cout << "Awnser: " ;
    cin >> aw10 ;
    
    cout <<"\n \n" ;
    
    // Q10 if else statement
    if ( aw10 == 'B' || aw10 == 'b' ){
        cout << "The awnser is: B \n" ;
        cout << "Your awnser is: " << aw10 << endl ;
        sc++ ;
        cout << "Your correct :) \n \n" ;
    }else {
        cout << "The awnser is: B \n" ;
        cout << "Your awnser is: " << aw10 << endl ;
        cout << "Your wrong :( \n \n" ;
    }
    
       // Q11
    char aw11 ;
    cout << "11. " << name << " Is a cross-platform, statically typed, general-purpose programming language with type inference. \n" ;
    cout << "\n A. Swift \n B. Kotlin \n C. HTML \n D. JavaScript \n \n" ;
    cout << "Awnser: " ;
    cin >> aw11 ;
    
    cout <<"\n \n" ;
    
    // Q11 if else statement
    if ( aw11 == 'B' || aw11 == 'b' ){
        cout << "The awnser is: B \n" ;
        cout << "Your awnser is: " << aw11 << endl ;
        sc++ ;
        cout << "Your correct :) \n \n" ;
    }else {
        cout << "The awnser is: B \n" ;
        cout << "Your awnser is: " << aw11 << endl ;
        cout << "Your wrong :( \n \n" ;
    }
    
      // Q12
    char aw12 ;
    cout << "12. " << name << " A formal language comprising a set of instructions that produce various kinds of output. \n" ;
    cout << "\n A. Computer Programming \n B. Computer Language \n C. Programming Language \n D. Programming \n \n" ;
    cout << "Awnser: " ;
    cin >> aw12 ;
    
    cout <<"\n \n" ;
    
    // Q12 if else statement
    if ( aw12 == 'C' || aw12 == 'c' ){
        cout << "The awnser is: C \n" ;
        cout << "Your awnser is: " << aw12 << endl ;
        sc++ ;
        cout << "Your correct :) \n \n" ;
    }else {
        cout << "The awnser is: C \n" ;
        cout << "Your awnser is: " << aw12 << endl ;
        cout << "Your wrong :( \n \n" ;
    }
    
    // Q13
    char aw13 ;
    cout << "13. " << name << " A Write and test code that allows computer applications and programs to function. \n" ;
    cout << "\n A. Computer Programmers \n B. Computer Programming \n C. Programming Language \n D. Programming \n \n" ;
    cout << "Awnser: " ;
    cin >> aw13 ;
    
    cout <<"\n \n" ;
    
    // Q13 if else statement
    if ( aw13 == 'A' || aw13 == 'a' ){
        cout << "The awnser is: A \n" ;
        cout << "Your awnser is: " << aw13 << endl ;
        sc++ ;
        cout << "Your correct :) \n \n" ;
    }else {
        cout << "The awnser is: A \n" ;
        cout << "Your awnser is: " << aw13 << endl ;
        cout << "Your wrong :( \n \n" ;
    }
    
     // Q14
    char aw14 ;
    cout << "14. " << name << " Is the process of designing and building an executable computer program to accomplish a specific computing result or to perform a specific task.  \n" ;
    cout << "\n A. Computer Programming \n B. Computer Programmers \n C. Computer Software \n D. Computer Hardware  \n \n" ;
    cout << "Awnser: " ;
    cin >> aw14 ;
    
    cout <<"\n \n" ;
    
    // Q14 if else statement
    if ( aw14 == 'A' || aw14 == 'a' ){
        cout << "The awnser is: A \n" ;
        cout << "Your awnser is: " << aw14 << endl ;
        sc++ ;
        cout << "Your correct :) \n \n" ;
    }else {
        cout << "The awnser is: A \n" ;
        cout << "Your awnser is: " << aw14 << endl ;
        cout << "Your wrong :( \n \n" ;
    }
    
     // Q15
    char aw15 ;
    cout << "15. " << name << " Has been called the world's first computer programmer. \n" ;
    cout << "\n A. Leonardo da Vinci \n B. Adam Lovelan \n C. Ada Lovelace \n D. Eva Lovelace  \n \n" ;
    cout << "Awnser: " ;
    cin >> aw15 ;
    
    cout <<"\n \n" ;
    
    // Q15 if else statement
    if ( aw15 == 'C' || aw15 == 'c' ){
        cout << "The awnser is: C \n" ;
        cout << "Your awnser is: " << aw15 << endl ;
        sc++ ;
        cout << "Your correct :) \n \n" ;
    }else {
        cout << "The awnser is: C \n" ;
        cout << "Your awnser is: " << aw15 << endl ;    
        cout << "Your wrong :( \n \n" ;
      }  
         
         //Thanks for answering
        cout << "Thanks for answering "<< name << " your score is: " << sc << endl << endl ;
        
        //Give me a thumbs up :)
        cout << "Give me a thumbs up :) \n \n \n" ;
        
        //By: Jimwell B. Ibay
        cout << "By: Jimwell B. Ibay" ;
  }   
        }
        
       //Invalid Input
         } else {
        cout << "Invalid Make Sure Your Input Is 1 2 and 3 \n" ;
    }   
    
   return 0 ; 
}