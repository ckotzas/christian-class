require 'rubygems'
require 'sinatra'
require 'haml'

require 'sinatra/activerecord'
set :database, "sqlite3:///welovedb.sqlite3"
require './models'

get '/user/:id' do
	@user = User.find(params[:id])
	haml :home
end

get '/user/:id/posts' do
	@user = User.find(params[:id])
	haml :posts
end

get '/posts' do
	@posts = Post.all
	haml :all_posts
end
