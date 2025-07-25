import { View, Text} from 'react-native';
import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../provider/Context';

interface propItem{
    Header:string
    rules:string[]
    intro:string
}

const RuleSnippet:React.FC<propItem> = (props) => {
    const context = useContext(AppContext);
    if (!context) return null; 
    const { darkMode} = context
    const { Header, rules, intro } = props; // Receive darkMode prop

    return (
        <View>
            <View style={{ height: 10 }}></View>
            <View className={`border-[1px] my-4 rounded-xl p-3 ${darkMode ? 'border-white' : 'border-slate-900'}`}>
                <Text className={`text-xl mb-3 font-Handlee ${darkMode ? 'text-white' : 'text-slate-900'}`}> 
                    {Header}
                </Text>
                <Text className={`text-md font-Ubunturegular ${darkMode ? 'text-gray-400' : 'text-slate-900'}`}> 
        
                    {intro}
                </Text>
                <View className="pl-14">
                    {rules.map((item:string, index:number) => (
                        <Text
                            className={`ml-14 mt-5 text-sm font-Ubunturegular ${darkMode ? 'text-gray-400' : 'text-slate-900'}`} 
                            key={index}
                        >
                            {item}
                        </Text>
                    ))}
                </View>
            </View>
            <View style={{ height: 10 }}></View>
        </View>
    );
};

export default RuleSnippet;