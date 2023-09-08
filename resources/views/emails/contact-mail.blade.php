<!DOCTYPE html>
<html lang="en">

<head>
    <title>Contact Details</title>
</head>

<body>
    <table>

        <tr>
            <th colspan="2" style="text-align:center;font-size:20px">New Contact Form Data </th>
        </tr>
        <tr>
            <th>Name :</th>
            <td>{{ $mailData['data']['name'] }}</td>
        </tr>
        <tr>
            <th>Email :</th>
            <td>{{ $mailData['data']['email'] }}</td>
        </tr>
        <tr>
            <th>Phone :</th>
            <td>{{ $mailData['data']['phone_number'] }}</td>
        </tr>
       
        <tr>
            <th>Message :</th>
            <td>{{ $mailData['data']['message'] }}</td>
        </tr>
    </table>
</body>

</html>
