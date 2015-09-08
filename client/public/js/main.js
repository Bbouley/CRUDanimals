// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

  $('#success').hide();
  $('#error').hide();
  $('.showAnimals').hide();
  $('#edit-form').hide();
  showAnimals();

  });

  $('#show-animals').on('click', function(e){
    e.preventDefault();
    $('.showAnimals').show();
  });

  $('#hide-animals').on('click', function(e){
    e.preventDefault();
    $('.showAnimals').hide();
  });

  $('#animal-form').on('submit', function(e){
    e.preventDefault();
    var name = $('#animal-name').val();
    var type = $('#animal-type').val();
    var age = $('#animal-age').val();
    var ability = $('#animal-ability').val();
    var payload = {
      name : name,
      type : type,
      age : age,
      ability : ability
    };
    $.post('/api/v1/animals', payload, function(data){
        console.log(data);
        $('.showAnimals').append('<p>' + data.animal.name + '</p>');
        $('#animal-name').val('');
        $('#animal-type').val('');
        $('#animal-age').val('');
        $('#animal-ability').val('');
        $('#success').show();
    });
  });

  $(document).on('click', '.editAnimal', function(e){
    e.preventDefault();
    $('#animal-form').hide();
    $('#edit-form').show();
    console.log($(this).attr('id'));
    $.get('api/v1/animal/'+ $(this).attr('id'), function(data){
      console.log(data);
      $('#edit-animal-name').val(data.name);
      $('#edit-animal-type').val(data.type);
      $('#edit-animal-age').val(data.age);
      $('#edit-animal-ability').val(data.ability);
      $('#edit-animal').attr('id', $(this).attr('id'));
    });
  });

  $(document).on('click', '#edit-animal', function(e){
    e.preventDefault();
    console.log('testing');
    console.log($(this).attr('id'));
    var name = $('#edit-animal-name').val('');
    var type = $('#edit-animal-type').val('');
    var age = $('#edit-animal-age').val('');
    var ability = $('#edit-animal-ability').val('');
    var payload = {
      name: name,
      type: type,
      age: age,
      ability: ability,
    };

    $.ajax({
      method: 'PUT',
      url: '/api/v1/animal/edit/' + $(this).attr('id'),
      data: payload
    }).done(function(data){
      console.log(data);
      showAnimals();
      $('#animal-form').show();
      $('#edit-form').hide();
    });

  });


function showAnimals(){
  $.get('/api/v1/animals', function(data){
    for (var i = 0; i < data.length; i++) {
      $('.showAnimals').append(
        '<tr>' +
        '<td>' + data[i].name +'</td>' +
        '<td>' + data[i].type +'</td>' +
        '<td>' + data[i].age +'</td>' +
        '<td>' + data[i].ability +'</td>' +
        '<td><button type = "button" class = "editAnimal btn btn-warning" id = ' + data[i]._id + '>Edit</button></td>' +
        '<td><button type = "button" class = "deleteAnimal btn btn-danger" id = ' + data[i]._id + '>Edit</button></td>'
      );
    }
  });
}

