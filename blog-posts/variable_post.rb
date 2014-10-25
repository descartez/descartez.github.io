

	thing = "A regular variable."

	class Test

		attr_accessor :instance_var, :another_instance

		@@class_var = "This is a class variable"

		def initialize
			@instance_var = "This is an instance variable."
			@another_instance = "Another instance variable!"
		end

		def inside_var
			other_var = "Just another regular variable."
		end

		def class_var_get
			@@class_var
		end

		def change_class_var
			@@class_var = "I changed the class variable!"
		end

		$global = "A global variable"
	end

# First, let's initialize (aka make) our class, so they work.
# Notice how test1 and test2 are just different creations of
# the same class.

test1 = Test.new
test2 = Test.new

# Now let's try it out!

puts thing #thing is outside the class, so you can get it
			# even though it's a regular old variable

puts $global #this thing is accessible everywhere, even though
				# it's declared inside a class


puts test1.class_var_get #This will show us @@class_var
puts test2.change_class_var #this will change it everywhere, even though 
							# I've changed it using test2
puts test1.class_var_get #hey look! It changed!

puts test1.instance_var
puts test1.another_instance


puts other_var #this will throw an error

puts test1.inside_var #but this won't. I wonder why?
					# that's because other_var is local
					# only to the method it was declared in



