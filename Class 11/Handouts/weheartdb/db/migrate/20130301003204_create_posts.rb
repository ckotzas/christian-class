class CreatePosts < ActiveRecord::Migration
  def up
		create_table :posts do |t|
			t.string :text
			t.datetime :posted_at
			t.integer :user_id
		end
  end

  def down
		drop_table :posts
  end
end
