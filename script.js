$(document).ready(function () {
    $('#submit-btn').click(function () {
        var nama = $('#nama-input').val();
        var nim = $('#nim-input').val();
        var jurusan = $('#jurusan-input').val();

        $.ajax({
            url: 'URL_REST_API',
            type: 'POST',
            dataType: 'json',
            data: {
                nama: nama,
                nim: nim,
                jurusan: jurusan
            },
            success: function (data) {
                alert('Data berhasil disimpan');
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('Error:', textStatus, errorThrown);
            }
        });
        return false;
    });
});