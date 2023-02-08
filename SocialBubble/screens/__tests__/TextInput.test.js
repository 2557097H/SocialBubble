import React from "react";
import renderer from "react-test-renderer";
import PersonalDetails from "../PersonalDetailsScreen";
import {fireEvent} from '@testing-library/react';
import {TextEncoder, TextDecoder} from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

describe("<PersonalDetails />", () => {
    
    test('has correct input', () => {
        const{getByPlaceholder, getByText, getAllByText} = render(

            <PersonalDetails/>

    );

    fireEvent.changeText(
        getByPlaceholder("Name"),
        'Euan',
        getByPlaceholder("Date_of_Birth"),
        '22/01/2002',
        getByPlaceholder("Occupation"),
        'Programmer',
        getByPlaceholder("Email"),
        'hallidayeuan@gmail.com',      
        getByPlaceholder("Confirm Email"),
        'hallidayeuan@gmail.com',
        getByPlaceholder("Password"),
        'react123',
        getByPlaceholder("Confirm Password"),
        'react123',
        );
    fireEvent.press(getByText('Next'));

    const nameElement  = getAllByText('Euan');
    const dateElement  = getAllByText('22/01/2002');
    const occupationElement  = getAllByText('Programmer');
    const emailElement  = getAllByText('hallidayeuan@gmail.com');
    const confirmEmailElement = getAllByText('hallidayeuan@gmail.com');
    const passwordElement  = getAllByText('react123');
    const confirmPasswordElement  = getAllByText('react123');

    expect(nameElement && dateElement && occupationElement && emailElement && confirmEmailElement && passwordElement && confirmPasswordElement).toHaveLength(1);
        


    

     

    });
});