var general = (function() {

    return {
        openModal: function (params) {
            $("#GeneralModalBody").html(params.body);
            $("#GeneralModalTitle").html(params.title);
            $("#GeneralModalSubmit").html(params.submitLabel);
        
            $('#GeneralModal').modal('show');
        },
        deleteDialog: function (params) {
            this.openModal({ body: "Do you really want to delete this item?", title: "Delete?", submitLabel: "Delete" });
        
            $("#GeneralModalSubmit").on("click", function () {
                params.onConfirm();
                $('#GeneralModal').modal('hide');
            });
        }
    }
  
  })(general||{})