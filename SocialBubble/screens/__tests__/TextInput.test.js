import React from "react";
import PersonalDetails from "../PersonalDetailsScreen";
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'
import {TextEncoder, TextDecoder} from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

describe("<PersonalDetails />", () => {
    
    test('has correct input', () => {
        const{getByPlaceholderText, getByTestId, getAllByText} = render(
            <PersonalDetails />
        );
        
        fireEvent.change(getByPlaceholderText("Name"), {target: {value: 'Euan'}})
        fireEvent.change(getByPlaceholderText("Date_of_Birth"),'22/01/2002')
        fireEvent.change(getByPlaceholderText("Occupation"),'Programmer')
        fireEvent.change(getByPlaceholderText("Email"),'hallidayeuan@gmail.com')     
        fireEvent.change(getByPlaceholderText("Confirm Email"),'hallidayeuan@gmail.com')
        fireEvent.change(getByPlaceholderText("Password"),'react123')
        fireEvent.change(getByPlaceholderText("Confirm Password"),'react123')
        
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