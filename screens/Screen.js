import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";

class Screen extends Component {
    render() {
        return (
            <View>
                <Text>First Screen !!!</Text>
                <Icon size={30} name="ios-trash" color="blue" />
                {this.props.auth.users.map(user => <Text>{user}</Text>)}
            </View>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        auth
    };
};

export default connect(mapStateToProps)(Screen);
