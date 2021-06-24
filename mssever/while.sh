#!/bin/bash

# Assistance for Glenn

while true; do
    echo "Enter username"
    read username
    echo "Enter password"
    read password

    if [[ ( $username == "admin" && $password == "secret" ) ]]; then
        echo "valid user"
        break
    else
        echo "invalid user. Try again"
    fi
done
