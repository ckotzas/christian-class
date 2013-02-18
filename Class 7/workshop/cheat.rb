#variables
a=1
b=99
c=a+b
puts c 

#variable types
#float
puts 3.45

#integers
puts 6

#strings
puts "This is a string"

#arrays 
array = [10,12,100, "one more"]
puts array
puts array.inspect

#hash
myHash = {"william" => "myfriend", "jack" => "myfoe"}
puts myHash ["jack"]
puts myHash ["william"]

#object
class Car
	attr_accessor :brand
	attr_accessor :wheels
	def crash_car
		puts "car crashed"
	end
end

class Bag
	attr_accessor :color
	attr_accessor :size
	def open_bag
		puts "bag opened"
	end
end		