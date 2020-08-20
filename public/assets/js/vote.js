$(document).ready(() => {
  // Event listener listening for a click on any vote button, then will run voteSticky
  $(document).on("click", ".voteButton", voteSticky);

  // Function to send POST request to server to log sticky vote
  async function voteSticky(event) {
    try {
      // Getting the stickyId of the sticky clicked on
      const sticky = event.currentTarget.closest(".draggable");
      const stickyId = $(sticky).attr("id");

      // Send post request to server with the stickyId and userId in order to log this vote
      $.post("/api/vote", { stickyId }, data => {
        // Find the star vote counter for this sticky
        const stickyStar = $(sticky).find(".voteCount");
        // Render the vote count onto the star
        stickyStar.html(data.stickyVoteCount);

        console.log(
          `User ${data.userEmail} has voted for sticky #${data.stickyId}`
        );
      }).then(() => {
        // Reload the page to run through handlebars again in order to render the filled in star in place of the empty star
        location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  }
});
