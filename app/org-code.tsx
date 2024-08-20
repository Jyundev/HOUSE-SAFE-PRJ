import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse';
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

type WorldCity = {
  code: string;
  region: string;
};

export const orgCode = () => {
  const csvFilePath = path.resolve(__dirname, '../assets/data/orgCode.csv');

  const headers = ['code', 'region'];

  const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

  parse(fileContent, {
    delimiter: ',',
    columns: headers,
  }, (error, result: WorldCity[]) => {
    if (error) {
      console.error(error);
    }

    console.log("Result", result);
    
  });

  return (
    <SafeAreaView>
      <Text>OrgCode</Text>
    </SafeAreaView>
  )
}

