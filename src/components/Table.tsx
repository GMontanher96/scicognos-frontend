import React, {useEffect, useState} from 'react';
import DataGrid from 'react-data-grid';
import axios from 'axios';


function DataGridUsers() {
    const [data, setData] = useState([]);

    const getUserData = async () => {
        await axios.get("http://127.0.0.1:8000/api/users").then((res) => {
            setData(res.data.data);
        })
    }

    useEffect(() => {
        getUserData();
    }, []);

    const columns = [
        { key: 'user_id', name: 'ID' },
        { key: 'user_name', name: 'Name' },
        { key: 'user_email',name: 'E-mail' },
        { key: 'user_cpf', name: 'CPF' },
        { key: 'user_password', name: 'Password' },
        { key: 'user_password_confirm', name: 'Confirm Password' },
        { key: 'user_birth_date', name: 'Birth Date' },
        { key: 'user_sex', name: 'Genre' },
        { key: 'user_fone', name: 'Phone' },
        { key: 'user_fone_whatsapp', name: 'Phone Whatsapp' },
        { key: 'user_receive_offers', name: 'Receive Offers' },
        { key: 'user_receive_offers_whatsapp', name: 'Receive Offers Whatsapp' },
        { key: 'user_status', name: 'Status' },

    ]

    const rows = data.map((row) => ({
        user_id: row.user_id,
        user_name: row.user_name,
        user_email: row.user_email,
        user_cpf: row.user_cpf,
        user_password: row.user_password,
        user_password_confirm: row.user_password_confirm,
        user_birth_date: row.user_birth_date,
        user_sex: row.user_sex,
        user_fone: row.user_fone,
        user_fone_whatsapp: row.user_fone_whatsapp,
        user_receive_offers: row.user_receive_offers,
        user_receive_offers_whatsapp: row.user_receive_offers_whatsapp,
        user_status: row.user_status,

    }))
    console.log(data)

    return(
    <div style={{ heigjt: 500, width: "100%"}}>
    <DataGrid
    columns={columns} 
    rows={rows}
    pageSize={10}
    rowsPerPageOptions={[10]}
    />
    </div>
    );
}

export default DataGridUsers;