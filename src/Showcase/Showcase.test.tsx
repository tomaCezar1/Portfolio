import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import Showcase from './Showcase';

const lang = 'Javascript';
const title = 'Projects';
const desc = 'a js library';

describe('<Showcase />', () => {
    it('renders Showcase component without crashing', () => {
        shallow(<Showcase />);
    });

    it('renders h3 of Showcase', () => {
        const wrapper = shallow(<Showcase />);
        // eslint-disable-next-line jsx-a11y/heading-has-content
        const header = <h3></h3>;
        expect(wrapper.contains(header)).toEqual(true);
    });

    it('contains a paragraph with text', () => {
        const wrapper = mount(<Showcase lang={lang} title={title} desc={desc} />);
        const value = wrapper.find('p').text();
        expect(value).toEqual('a js library');
    });
});

// test for props
describe('passing props', () => {
    const showcaseWrapper = mount(<Showcase lang={lang} title={title} desc={desc} />);
    it('see if lang prop is passed correctly', () => {
        expect(showcaseWrapper.props().lang).toEqual(lang);
    });
    // another way of verifying props (e.g. specific value)
    it('contains title prop', () => {
        const propValue = showcaseWrapper.find('.showcase-title').text();
        expect(propValue).toEqual('Project');
    });
});
