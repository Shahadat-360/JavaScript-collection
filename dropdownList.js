    <script>
    $(document).ready(function(){
        $('#id_category').change(function(){
            var category_id = $(this).val();
            if(category_id){
                $.ajax({
                    url: '/Editor/get-subcategories/',
                    type: 'GET',
                    data: {'category_id': category_id},
                    success: function(data){
                        $('#id_subcategory1').html(data);
                    }
                });
            }else{
                $('#id_subcategory1').empty();
                $('#id_subcategory2').empty();
                $('#id_topic').empty();
            }
        });

        $('#id_subcategory1').change(function(){
            var subcategory1_id = $(this).val();
            if(subcategory1_id){
                $.ajax({
                    url: '/Editor/get-subcategories2/',
                    type: 'GET',
                    data: {'subcategory1_id': subcategory1_id},
                    success: function(data){
                        $('#id_subcategory2').html(data);
                    }
                });
            }else{
                $('#id_subcategory2').empty();
                $('#id_topic').empty();
            }
        });

        $('#id_subcategory2').change(function(){
            var subcategory2_id = $(this).val();
            if(subcategory2_id){
                $.ajax({
                    url: '/Editor/get-topics/',
                    type: 'GET',
                    data: {'subcategory2_id': subcategory2_id},
                    success: function(data){
                        $('#id_topic').html(data);
                    }
                });
            }else{
                $('#id_topic').empty();
            }
        });
    });
    </script>
