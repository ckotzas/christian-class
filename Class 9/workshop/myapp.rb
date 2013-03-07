require 'rubygems'
require 'sinatra'
require 'haml'

get '/say/hi/:name' do
	haml :home
end

get '/about' do
	haml :about
end

get '/destinations' do
	haml :destinations
end

def sayHello(name)
	"Welcome to our Website, #{name}"
end