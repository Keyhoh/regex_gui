###UnitComponent

####Constitution
```puml
salt
{
    {T
        + UnitComponent | RegexUnitImpl
        ++ OperatorComponent | logicalOperator
        ++ InputComponent | characters, regexUnits
    }
}
```

####Props
| Name | Status | Type | Refer |
|:---:|:---:|:---:|:---:|
| logicalOperator | and | String | RegexUnitImpl.logicalOperator |
| characters | null string | String | RegexUnitImpl.characters |
| regexUnits | null array | \[ RegexUnitImpl \] | RegexUnitImpl.regexUnits |
