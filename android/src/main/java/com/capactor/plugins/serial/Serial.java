package com.capactor.plugins.serial;

import android.util.Log;

public class Serial {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
