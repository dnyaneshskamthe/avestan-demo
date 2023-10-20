import { useLayoutEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5percent from "@amcharts/amcharts5/percent";
import { Box, Card, Text } from '@chakra-ui/react';

const Donut = () => {
  useLayoutEffect(() => {
    let donutRoot = am5.Root.new("donutChart"); // Unique root name

    donutRoot.setThemes([am5themes_Animated.new(donutRoot)]);

    let chart = donutRoot.container.children.push(
      am5percent.PieChart.new(donutRoot, {
        endAngle: 180,
        innerRadius: am5.percent(70), // Set the inner radius for the donut chart (40% of the radius)
        alignLabels: false
      })
    );

    let series = chart.series.push(
      am5percent.PieSeries.new(donutRoot, {
        valueField: "value",
        categoryField: "category",
        endAngle: 270,
        name : "Donut",
        alignLabels: false
      })
    );
    series.slices.template.states.create("active", {
      shiftRadius: 0,
      stroke: am5.color(0x995522),
      strokeWidth: 5
    });

    series.states.create("hidden", {
      endAngle: -90
    });

    series.labels.template.setAll({
      text: "",
      textType: "circular",
      inside: true,
      radius: 10,
    });

    series.get("colors").set("colors", [
      am5.color("#50C878"),
      am5.color("#6139ea"),
      
    ]);

    series.data.setAll([
      {
        category: "new",
        value: 20
      },
      {
        category: "existing",
        value: 40
      },
      
      
    ]);
    
      
    series.appear(1000, 100);

    return () => {
      donutRoot.dispose();
    };
  }, []);

  return (
   
    <Card w={{base:"10em", md:"30em"}} mx="10px" p="1em">
        
        <Text fontWeight="bold" fontSize="1.3em" color="blackAlpha.900">Employee Composition</Text>
        <Box id="donutChart" w="15em" h="15em" className='' m="auto"></Box>
        <Text color="gray.400" textAlign="center">856 Employees total</Text>
        
    </Card>
   
  );
};

export default Donut;
