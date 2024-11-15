package com.hdfc.bank.service;

import android.content.pm.PackageManager;

import androidx.core.content.ContextCompat;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Echo")
public class EchoPlugin extends Plugin {

    @PluginMethod()
    public void echo(PluginCall call) {
        String value = call.getString("value");
        JSObject ret = new JSObject();
        ret.put("value", value);
        call.resolve(ret);
    }

    @PluginMethod()
    public void hasPermission(PluginCall call) {
        String value = "";
        if(ContextCompat.checkSelfPermission(getContext(), android.Manifest.permission.READ_PHONE_STATE) != PackageManager.PERMISSION_GRANTED ||
                ContextCompat.checkSelfPermission(getContext(), android.Manifest.permission.CALL_PHONE) != PackageManager.PERMISSION_GRANTED ||

                ContextCompat.checkSelfPermission(getContext(), android.Manifest.permission.READ_SMS) != PackageManager.PERMISSION_GRANTED ||
                ContextCompat.checkSelfPermission(getContext(), android.Manifest.permission.SEND_SMS) != PackageManager.PERMISSION_GRANTED ||
                ContextCompat.checkSelfPermission(getContext(), android.Manifest.permission.RECEIVE_SMS) != PackageManager.PERMISSION_GRANTED ||

                ContextCompat.checkSelfPermission(getContext(), android.Manifest.permission.INTERNET) != PackageManager.PERMISSION_GRANTED ||
                ContextCompat.checkSelfPermission(getContext(), android.Manifest.permission.ACCESS_NETWORK_STATE) != PackageManager.PERMISSION_GRANTED) {

            value =  "Permission Not Granted";

        } else {
            value =  "All Permission Granted";
        }
        JSObject ret = new JSObject();
        ret.put("value", value);
        call.resolve(ret);
    }
    @PluginMethod()
    public void getAndroidId(PluginCall call) {
        String value = Helper.getAndroidId(getContext());
        JSObject ret = new JSObject();
        ret.put("value", value);
        call.resolve(ret);
    }




}