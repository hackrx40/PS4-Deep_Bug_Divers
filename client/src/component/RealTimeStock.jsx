import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const data = [
  {
    time: '1',
    value: '472',
  },
  {
    time: '2',
    value: '433',
  },
  {
    time: '3',
    value: '458',
  },
  {
    time: '4',
    value: '482',
  },
  {
    time: '5',
    value: '511',
  },
  {
    time: '6',
    value: '471',
  },
  {
    time: '7',
    value: '422',
  },
  {
    time: '8',
    value: '401',
  },
  {
    time: '9',
    value: '395',
  },
  {
    time: '10',
    value: '356',
  },
  {
    time: '11',
    value: '376',
  },
  {
    time: '12',
    value: '358',
  },
  {
    time: '13',
    value: '356',
  },
  {
    time: '14',
    value: '338',
  },
  {
    time: '15',
    value: '358',
  },
  {
    time: '16',
    value: '336',
  },
  {
    time: '17',
    value: '302',
  },
  {
    time: '18',
    value: '332',
  },
  {
    time: '19',
    value: '290',
  },
  {
    time: '20',
    value: '339',
  },
  {
    time: '21',
    value: '378',
  },
  {
    time: '22',
    value: '346',
  },
  {
    time: '23',
    value: '304',
  },
  {
    time: '24',
    value: '254',
  },
  {
    time: '25',
    value: '235',
  },
  {
    time: '26',
    value: '282',
  },
  {
    time: '27',
    value: '272',
  },
  {
    time: '28',
    value: '286',
  },
  {
    time: '29',
    value: '248',
  },
  {
    time: '30',
    value: '297',
  },
  {
    time: '31',
    value: '299',
  },
  {
    time: '32',
    value: '298',
  },
  {
    time: '33',
    value: '327',
  },
  {
    time: '34',
    value: '306',
  },
  {
    time: '35',
    value: '308',
  },
  {
    time: '36',
    value: '305',
  },
  {
    time: '37',
    value: '272',
  },
  {
    time: '38',
    value: '240',
  },
  {
    time: '39',
    value: '202',
  },
  {
    time: '40',
    value: '196',
  },
  {
    time: '41',
    value: '232',
  },
  {
    time: '42',
    value: '184',
  },
  {
    time: '43',
    value: '224',
  },
  {
    time: '44',
    value: '233',
  },
  {
    time: '45',
    value: '276',
  },
  {
    time: '46',
    value: '255',
  },
  {
    time: '47',
    value: '258',
  },
  {
    time: '48',
    value: '216',
  },
  {
    time: '49',
    value: '185',
  },
  {
    time: '50',
    value: '162',
  },
  {
    time: '51',
    value: '155',
  },
  {
    time: '52',
    value: '108',
  },
  {
    time: '53',
    value: '71',
  },
  {
    time: '54',
    value: '81',
  },
  {
    time: '55',
    value: '120',
  },
  {
    time: '56',
    value: '108',
  },
  {
    time: '57',
    value: '105',
  },
  {
    time: '58',
    value: '85',
  },
  {
    time: '59',
    value: '56',
  },
  {
    time: '60',
    value: '56',
  },
  {
    time: '61',
    value: '106',
  },
  {
    time: '62',
    value: '126',
  },
  {
    time: '63',
    value: '140',
  },
  {
    time: '64',
    value: '123',
  },
  {
    time: '65',
    value: '173',
  },
  {
    time: '66',
    value: '131',
  },
  {
    time: '67',
    value: '177',
  },
  {
    time: '68',
    value: '215',
  },
  {
    time: '69',
    value: '264',
  },
  {
    time: '70',
    value: '263',
  },
  {
    time: '71',
    value: '222',
  },
  {
    time: '72',
    value: '240',
  },
  {
    time: '73',
    value: '267',
  },
  {
    time: '74',
    value: '251',
  },
  {
    time: '75',
    value: '261',
  },
  {
    time: '76',
    value: '227',
  },
  {
    time: '77',
    value: '211',
  },
  {
    time: '78',
    value: '167',
  },
  {
    time: '79',
    value: '197',
  },
  {
    time: '80',
    value: '214',
  },
  {
    time: '81',
    value: '191',
  },
  {
    time: '82',
    value: '209',
  },
  {
    time: '83',
    value: '228',
  },
  {
    time: '84',
    value: '233',
  },
  {
    time: '85',
    value: '243',
  },
  {
    time: '86',
    value: '203',
  },
  {
    time: '87',
    value: '167',
  },
  {
    time: '88',
    value: '174',
  },
  {
    time: '89',
    value: '169',
  },
  {
    time: '90',
    value: '160',
  },
  {
    time: '91',
    value: '180',
  },
  {
    time: '92',
    value: '157',
  },
  {
    time: '93',
    value: '129',
  },
  {
    time: '94',
    value: '149',
  },
  {
    time: '95',
    value: '137',
  },
  {
    time: '96',
    value: '175',
  },
  {
    time: '97',
    value: '182',
  },
  {
    time: '98',
    value: '208',
  },
  {
    time: '99',
    value: '183',
  },
  {
    time: '100',
    value: '232',
  },
  {
    time: '101',
    value: '210',
  },
  {
    time: '102',
    value: '167',
  },
  {
    time: '103',
    value: '184',
  },
  {
    time: '104',
    value: '160',
  },
  {
    time: '105',
    value: '129',
  },
  {
    time: '106',
    value: '135',
  },
  {
    time: '107',
    value: '160',
  },
  {
    time: '108',
    value: '183',
  },
  {
    time: '109',
    value: '162',
  },
  {
    time: '110',
    value: '144',
  },
  {
    time: '111',
    value: '105',
  },
  {
    time: '112',
    value: '91',
  },
  {
    time: '113',
    value: '53',
  },
  {
    time: '114',
    value: '3',
  },
  {
    time: '115',
    value: '-8',
  },
  {
    time: '116',
    value: '12',
  },
  {
    time: '117',
    value: '44',
  },
  {
    time: '118',
    value: '59',
  },
  {
    time: '119',
    value: '44',
  },
  {
    time: '120',
    value: '42',
  },
  {
    time: '121',
    value: '-5',
  },
  {
    time: '122',
    value: '-12',
  },
  {
    time: '123',
    value: '-26',
  },
  {
    time: '124',
    value: '-55',
  },
  {
    time: '125',
    value: '-57',
  },
  {
    time: '126',
    value: '-101',
  },
  {
    time: '127',
    value: '-70',
  },
  {
    time: '128',
    value: '-87',
  },
  {
    time: '129',
    value: '-109',
  },
  {
    time: '130',
    value: '-148',
  },
  {
    time: '131',
    value: '-109',
  },
  {
    time: '132',
    value: '-142',
  },
  {
    time: '133',
    value: '-112',
  },
  {
    time: '134',
    value: '-62',
  },
  {
    time: '135',
    value: '-39',
  },
  {
    time: '136',
    value: '-79',
  },
  {
    time: '137',
    value: '-45',
  },
  {
    time: '138',
    value: '-56',
  },
  {
    time: '139',
    value: '-97',
  },
  {
    time: '140',
    value: '-125',
  },
  {
    time: '141',
    value: '-134',
  },
  {
    time: '142',
    value: '-129',
  },
  {
    time: '143',
    value: '-99',
  },
  {
    time: '144',
    value: '-59',
  },
  {
    time: '145',
    value: '-34',
  },
  {
    time: '146',
    value: '8',
  },
  {
    time: '147',
    value: '-41',
  },
  {
    time: '148',
    value: '-65',
  },
];

function App() {
  return (
    <div className="bg-white m-5">
      <LineChart
        width={1000}
        height={500}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis type="number" domain={[0, 600]} interval={'preserveStartEnd'} />
        <Tooltip />
      </LineChart>
    </div>
  );
}

export default App;
