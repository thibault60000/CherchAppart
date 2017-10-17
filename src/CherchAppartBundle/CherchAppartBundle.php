<?php

namespace CherchAppartBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class CherchAppartBundle extends Bundle
{
    public function getParent()
    {
        return 'FOSUserBundle';
    }
}
