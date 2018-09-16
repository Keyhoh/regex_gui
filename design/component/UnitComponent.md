###UnitComponent

####Constitution
```puml
salt
{
    {T
        + UnitComponent | RegexUnit
        ++ OperatorComponent | logicalOperator
        ++ InputComponent | characters, regexUnits
    }
}
```

####Props
| Name | Status | Type | Refer |
|:---:|:---:|:---:|:---:|
| logicalOperator | and | String | RegexUnit.logicalOperator |
| characters | null string | String | RegexUnit.characters |
| regexUnits | null array | \[ RegexUnit \] | RegexUnit.regexUnits |
