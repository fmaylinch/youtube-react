
// https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#testing-components
import 'jest-enzyme'

// https://stackoverflow.com/a/46628165/1121497
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
