#!/usr/bin/env ruby

# adds 5
def addFive(n)
	n+5
end

# multiplies by 15
def multFifteen(n)
	n * 15
end

# performs a mathematical operation using 4 arguments
a = 3
b = 6
c = a + b
d = c / a
	puts a + b + c + d
end

# prints the argument 4 times
4.times do
	puts "This will be printed 4 times"
end

# prints uppercase version of the argument 
def caps(name)
	puts "#{name.upcase}"
end

# object with 2 attributes and 1 method
class User
	attr_accessor :age
	attr_accessor :name
	def create_profile
		puts "profile created"
	end
end