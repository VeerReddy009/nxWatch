import {configure as eConfigure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom';
import {configure as rtlConfigure} from '@testing-library/react';

// Configure Enzyme
eConfigure({ adapter: new Adapter() });

// Optionally configure Testing Library
rtlConfigure({
  // Add any testing library options here if needed, or remove if unnecessary
});
