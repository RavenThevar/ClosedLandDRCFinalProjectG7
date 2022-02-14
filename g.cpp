//Libraries Initializations
#include <iostream>
// IOStream declares the following: [cin, cout, cerr,clog] and the wide-character counterparts. Note that it is not just a combination of <istream> and <ostream>
#include <fstream>
// Defines the basic_filebuf, basic_ifstream, basic_ofstream, and basic_fstream classes. Declares the filebuf, wfilebuf, ifstream, wifstream, ofstream wofstream, fstream, and wfstream typedefs
#include <iomanip>
// Declares the I/O manipulators not declared elsewhere(mostly in <ios>)
#include <vector>
// The vector class template and the vector<bool> specialization
#include <cmath>
// Math Utilities, including trigonometric functions, srqt(), fabs(), and others
#include <algorithm>
// Prototypes for most of the algorithms in the STL(Standard Template Library)
// Using Namespace STD
using namespace std;
// the above allows a Developer to opt out from using STD:: every time

// The Standard Template Library (STL), supports various containers and algorithms.
// The STL provides implementations of commonly-used data structures such as linked lists and queues. 
// Data Structures are implemented using a concept called containers, which would store information called elements, in a way that implements the data structure (linked list, queue, etc) appropriately.
// Different data structures have different insertions, deletion, access behaviour and performance characteristics.
// The C++ STL Containers are homogenous which would only allow elements of only one type in each container.