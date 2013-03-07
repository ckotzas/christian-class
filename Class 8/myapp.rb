require 'rubygems'
require 'sinatra'

get '/say/hi/:name' do
	sayHello(params[:name])
	end

get '/add/:numberone/to/:numbertwo' do
	addTwoNumbers(params[:numberone].to_i, params[:numbertwo].to_i).to_s
end

get '/hi' do
	"Hello World"
end

get '/' do
	"This is the homepage"
end

def sayHello(name)
	"Welcome to our Website, #{name}"
end

def addTwoNumbers(a,b)
	a+b
end
