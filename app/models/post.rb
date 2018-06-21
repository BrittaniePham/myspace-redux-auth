class Post < ApplicationRecord
  belongs_to :user

  def self.posts_with_author
    Post.find_by_sql("
    SELECT p.id, p.body, p.user_id, u.name AS username
    FROM posts AS p 
    LEFT JOIN users u ON p.user_id = u.id 
    ORDER BY p.created_at desc
    ")
  end

  def self.posts_with_author_id(post)
    Post.find_by_sql("
    SELECT p.id, p.body, p.user_id, u.name AS username
    FROM posts AS p 
    LEFT JOIN users u ON p.user_id = u.id
    WHERE p.id = #{post.id}
    ORDER BY p.created_at desc
    ")
  end
  
end
