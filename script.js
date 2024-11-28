$(function () {
  // your code here
  $(".accordion-header").on("click", function () {
    $(".accordion-content").slideUp();

    const content = $(this).next(".accordion-content");
    if (content.is(":visible")) {
      content.slideUp();
    } else {
      content.slideDown();
    }
    // $(".accordion-header").not(this).slideDown();
  });

  $(".todos button").on("click", function () {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/todos",
      method: "GET",
      success: function (data) {
        const todoList = $(".todos ul");
        todoList.empty();
        data.forEach((todos) => {
          todoList.append(`
            <li>
            ${todos.title} 
            ${todos.completed}
            </li>
            `);
        });
      },
    });
  });
});
