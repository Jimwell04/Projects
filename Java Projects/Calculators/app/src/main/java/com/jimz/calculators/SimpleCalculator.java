package com.jimz.calculators;

import java.util.Scanner;

public class SimpleCalculator {

  public static void main(String[] args) {
  
  Scanner scan = new Scanner(System.in);
  
  int operators;
  int numOne;
  int numTwo;
  int sum;
  
  System.out.println("Operators \n 1.add \n 2.subtract \n 3.multiply \n 4.divide \n 5.remainder");
  
  System.out.print("Enter A Operators: ");
  operators = scan.nextInt();
  
  System.out.print("Enter A Number: ");
  numOne = scan.nextInt();
  
  System.out.print("Enter A Number: ");
  numTwo = scan.nextInt();
  
  if (operators == 1) {
    
    System.out.print("The answer is: ");
    System.out.println(numOne + numTwo);
    
  }
  else if (operators == 2) {
    
    System.out.print("The answer is: ");
    System.out.println(numOne - numTwo);
    
  }
  else if (operators == 3) {
    
    System.out.print("The answer is: ");
    System.out.println(numOne * numTwo);
    
  }
  else if (operators == 4) {
    
    System.out.print("The answer is: ");
    System.out.println(numOne / numTwo);
    
  }
  else if (operators == 5) {
    
    System.out.print("The answer is: ");
    System.out.println(numOne % numTwo);
    
  } else {
    
    System.out.println("Invalid Entered: Make sure your operator is 1,2,3,4,5");
    
  }
    
    
  }
}
