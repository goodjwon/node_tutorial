// 1. 사용자 목록을 비동기적으로 가져와 각 사용자의 이름과 이메일을 출력하는 문제.

// https://jsonplaceholder.typicode.com/users


async function fetchUsers() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const users = await res.json();
	
	users.forEach((user) => {
		console.log(user.name, user.email);
	});
}

fetchUsers();


// 2. 특정 ID를 가진 게시물을 가져와 게시물의 제목과 내용을 출력하는 문제.

async function fetchPost(postId){
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post = await response.json();
  
  console.log(`Title: ${post.title}`);
  console.log(`Body: ${post.body}`);
}

fetchPost(1);

// 3. 특정 사용자에게 할당된 할 일 목록을 가져와 출력하는 문제.
async function fetchUserTodos(userId) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
	const todos = await response.json();
	
	todos.forEach(todo => {
	  console.log(`Task: ${todo.title}, Completed: ${todo.completed}`);
	});
  }
  
  fetchUserTodos(1);

  //문제 4: 새로운 게시물 작성하기 
  async function createPost() {
	const newPost = {
	  title: 'New Post',
	  body: 'This is the body of the new post',
	  userId: 1
	};
  
	const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify(newPost),
	});
  
	const post = await response.json();
	console.log(`Created Post ID: ${post.id}`);
  }
  
  createPost();
  

  // 문제 5: 특정 사용자의 모든 게시물 가져오기
  async function fetchUserPosts(userId) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
	const posts = await response.json();
	
	posts.forEach(post => {
	  console.log(`Title: ${post.title}`);
	});
  }
  
  fetchUserPosts(1);

  
  // 문제 6: 게시물 수정하기
  async function updatePost(postId) {
	const updatedPost = {
	  title: 'Updated Post',
	  body: 'This is the updated content',
	};
  
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
	  method: 'PUT',
	  headers: {
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify(updatedPost),
	});
  
	const post = await response.json();
	console.log(`Updated Post: ${post.title}`);
  }
  
  updatePost(1);

  
  // 문제 7: 게시물 삭제하기
  async function deletePost(postId) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
	  method: 'DELETE',
	});
  
	if (response.ok) {
	  console.log(`Post ${postId} deleted`);
	}
  }
  
  deletePost(1);

  
  //문제 8: 여러 개의 게시물 병렬로 가져오기
  async function fetchMultiplePosts() {
	const postIds = [1, 2, 3];
	const promises = postIds.map(id => fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json()));
	
	const posts = await Promise.all(promises);
	
	posts.forEach(post => {
	  console.log(`Post: ${post.title}`);
	});
  }
  
  fetchMultiplePosts();
  
//문제 9: 게시물에 대한 댓글 가져오기

async function fetchPostComments(postId) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
	const comments = await response.json();
	
	comments.forEach(comment => {
	  console.log(`Comment by ${comment.name}: ${comment.body}`);
	});
  }
  
  fetchPostComments(1);

  
// 문제 10: 할 일 목록에서 완료된 작업만 필터링하기
async function fetchCompletedTodos() {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos');
	const todos = await response.json();
	
	const completedTodos = todos.filter(todo => todo.completed);
	
	completedTodos.forEach(todo => {
	  console.log(`Completed Task: ${todo.title}`);
	});
  }
  
  fetchCompletedTodos();
  