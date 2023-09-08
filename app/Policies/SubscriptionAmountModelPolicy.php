<?php

namespace App\Policies;

use App\Models\SubscriptionAmountModel;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class SubscriptionAmountModelPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, SubscriptionAmountModel $subscriptionAmountModel): bool
    {
        //
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, SubscriptionAmountModel $subscriptionAmountModel): bool
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, SubscriptionAmountModel $subscriptionAmountModel): bool
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, SubscriptionAmountModel $subscriptionAmountModel): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, SubscriptionAmountModel $subscriptionAmountModel): bool
    {
        //
    }
}
